# PoHI Example Repository

A demo repository for **Proof of Human Intent**.

Fork this repository to experience the PoHI human approval flow.

## What is PoHI?

In an era where AI writes code, PoHI is a protocol that cryptographically proves "who approved it."

- **Who?** - Human verification via World ID
- **What?** - Approval for a specific commit/PR
- **When?** - Tamper-proof timestamp

Details: [pohi-protocol/pohi](https://github.com/pohi-protocol/pohi)

## How to Try

### 1. Fork This Repository

Click the "Fork" button in the top right corner

### 2. Enable GitHub Actions

After forking, enable workflows in the "Actions" tab

### 3. Create a PR

```bash
git checkout -b test-pohi
echo "// test" >> src/hello.ts
git add .
git commit -m "Test PoHI approval"
git push origin test-pohi
```

Create a PR on GitHub

### 4. Add a Label

Add the `ready-to-merge` label to the PR

### 5. Approve with World App

1. The workflow starts and displays an approval URL
2. Scan the World ID QR code at [pohi-demo.vercel.app](https://pohi-demo.vercel.app/)
3. Approve with World App

### 6. Approval Complete

The approval result will be commented on the PR:
- Attestation Hash
- Nullifier Hash
- Approved At

## Requirements

- [World App](https://world.org/world-app) (iOS/Android)
- GitHub account

## Workflow Configuration

This repository has the following workflow configured:

```yaml
# .github/workflows/pohi-approval.yml
name: PoHI Human Approval

on:
  pull_request:
    types: [labeled]

jobs:
  verify:
    if: github.event.label.name == 'ready-to-merge'
    uses: pohi-protocol/pohi/.github/workflows/pohi-approval.yml@main
    with:
      approval-url: https://pohi-demo.vercel.app
      world-id-app-id: app_staging_5cdaf82b6bf48a0829c74584eb3aa23b
      world-id-action: approve_commit
```

## Add to Your Own Repository

1. Copy `.github/workflows/pohi-approval.yml`
2. Customize the configuration as needed
3. Get an App ID from [World ID Developer Portal](https://developer.worldcoin.org/)

## Related Links

- [PoHI Protocol](https://github.com/pohi-protocol/pohi) - Main repository
- [PoHI Demo](https://pohi-demo.vercel.app/) - Live demo
- [World ID Docs](https://docs.world.org/world-id) - World ID documentation

## License

[Apache License 2.0](LICENSE)
