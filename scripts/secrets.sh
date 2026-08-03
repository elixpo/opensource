#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
encrypted_file="$root_dir/.env"
local_file="$root_dir/.env.local"
action="${1:-}"

if ! command -v sops >/dev/null 2>&1; then
  echo "sops is required: https://getsops.io/docs/#download"
  exit 1
fi

case "$action" in
  encrypt)
    if [[ ! -f "$local_file" ]]; then
      echo "Missing .env.local. Copy .env.example first and add local values."
      exit 1
    fi
    sops encrypt --input-type dotenv --output-type dotenv "$local_file" > "$encrypted_file"
    echo "Encrypted .env.local -> .env"
    ;;
  decrypt)
    if [[ ! -f "$encrypted_file" ]]; then
      echo "Missing encrypted .env"
      exit 1
    fi
    sops decrypt --input-type dotenv --output-type dotenv "$encrypted_file" > "$local_file"
    chmod 600 "$local_file"
    echo "Decrypted .env -> .env.local"
    ;;
  *)
    echo "Usage: $0 <encrypt|decrypt>"
    exit 1
    ;;
esac
