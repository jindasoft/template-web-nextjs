boot:
	@brew install pre-commit
	@brew install trivy
	@npm install -g corepack
	@corepack enable
	@corepack prepare pnpm@10.32.1 --activate

init:
	@echo "Initializing project..."
	@pre-commit install
	@pnpm install

dev:
	@echo "Starting development server..."
	@pnpm dev

build:
	@echo "Building project..."
	@pnpm build

clean:
	@echo "Cleaning project..."
	@rm -rf node_modules .pnpm-store

vuln:
	@echo "Running vulnerability scan..."
	@pnpm audit

check:
	@echo "Pre-commit check..."
	@pre-commit run --all-files

trivy:
	@echo "Trivy scan..."
	@trivy fs --exit-code 1 --severity HIGH,CRITICAL .
