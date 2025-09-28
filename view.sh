#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BIN_DIR="$SCRIPT_DIR/bin"
DEFAULT_HUGO_BIN="$BIN_DIR/hugo"
HUGO_VERSION="0.124.1"
PREVIEW_HINT="Open static/previews/h1b-policy-lab.html in a simple web server (e.g. python -m http.server) for an offline preview."

resolve_archive() {
  local os arch
  os="$(uname -s)"
  arch="$(uname -m)"

  case "$os" in
    Linux)
      case "$arch" in
        x86_64|amd64)
          echo "hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz"
          ;;
        arm64|aarch64)
          echo "hugo_extended_${HUGO_VERSION}_Linux-ARM64.tar.gz"
          ;;
        *)
          echo "Unsupported Linux architecture: $arch" >&2
          return 1
          ;;
      esac
      ;;
    Darwin)
      echo "hugo_extended_${HUGO_VERSION}_macOS-universal.tar.gz"
      ;;
    *)
      echo "Unsupported operating system: $os" >&2
      return 1
      ;;
  esac
}

download_hugo() {
  mkdir -p "$BIN_DIR"

  local archive tmpdir url
  archive="$(resolve_archive)" || return 1
  tmpdir="$(mktemp -d)"
  url="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${archive}"

  echo "Downloading Hugo ${HUGO_VERSION}..." >&2
  if ! curl -sSL "$url" -o "$tmpdir/hugo.tar.gz"; then
    echo "Failed to download Hugo from GitHub releases." >&2
    echo "$PREVIEW_HINT" >&2
    rm -rf "$tmpdir"
    return 1
  fi

  if ! tar -xzf "$tmpdir/hugo.tar.gz" -C "$tmpdir" hugo; then
    echo "Failed to extract Hugo archive." >&2
    echo "$PREVIEW_HINT" >&2
    rm -rf "$tmpdir"
    return 1
  fi

  mv "$tmpdir/hugo" "$DEFAULT_HUGO_BIN"
  chmod +x "$DEFAULT_HUGO_BIN"
  rm -rf "$tmpdir"

  echo "$DEFAULT_HUGO_BIN"
}

ensure_hugo() {
  if [ -n "${HUGO_BIN:-}" ] && command -v "$HUGO_BIN" >/dev/null 2>&1; then
    command -v "$HUGO_BIN"
    return
  fi

  if command -v hugo >/dev/null 2>&1; then
    command -v hugo
    return
  fi

  if [ -x "$DEFAULT_HUGO_BIN" ]; then
    echo "$DEFAULT_HUGO_BIN"
    return
  fi

  download_hugo
}

main() {
  local hugo_bin
  if ! hugo_bin="$(ensure_hugo)"; then
    exit 1
  fi

  exec "$hugo_bin" --i18n-warnings server --bind 0.0.0.0 --baseURL=http://0.0.0.0:1313 "$@"
}

main "$@"
