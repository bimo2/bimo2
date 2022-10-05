function jsconfig(app, svg) {
  return {
    [`.${app}rc`]: svg,
    [`.${app}rc.json`]: svg,
    [`.${app}rc.yaml`]: svg,
    [`.${app}rc.yml`]: svg,
    [`.${app}rc.js`]: svg,
    [`${app}.config.json`]: svg,
    [`${app}.config.js`]: svg,
  };
}

export default {
  file: '_file',
  fileExtensions: {
    // Android
    'apk': '_android',
    'gradle': '_android',
    'pro': '_android',
    'properties': '_android',

    // Apple
    'ipa': '_apple',
    'pbxproj': '_apple',
    'plist': '_apple',
    'storyboard': '_apple',
    'xcconfig': '_apple',
    'xcframework': '_apple',
    'xcscheme': '_apple',
    'xcsettings': '_apple',
    'xcworkspacedata': '_apple',

    // AppleScript
    'applescript': '_apple',
    'scpt': '_apple',

    // C
    'c': '_c',

    // C++
    'cc': '_c_plus_plus',
    'cpp': '_c_plus_plus',
    'cxx': '_c_plus_plus',

    // CocoaPods
    'podspec': '_cocoapods',

    // CSS
    'css': '_css',
    'module.css': '_css',

    // Dart
    'dart': '_dart',

    // Docker
    'dockerfile': '_docker',

    // GitHub
    'diff': '_github',
    'patch': '_github',

    // Go
    'go': '_go',

    // Google
    'webmanifest': '_google',

    // GraphQL
    'gql': '_graphql',
    'graphql': '_graphql',

    // gRPC
    'proto': '_grpc',
    'protoset': '_grpc',

    // Header
    'h': '_header',
    'hh': '_header',
    'hpp': '_header',
    'hxx': '_header',

    // HTML
    'htm': '_html',
    'html': '_html',
    'xhtml': '_html',
    'xml': '_html',

    // Image
    'bmp': '_image',
    'ico': '_image',
    'jpg': '_image',
    'jpeg': '_image',
    'png': '_image',
    'tiff': '_image',
    'webp': '_image',

    // Java
    'java': '_java',
    'jsp': '_java',

    // JavaScript
    'cjs': '_javascript',
    'es': '_javascript',
    'js': '_javascript',
    'jsx': '_javascript',
    'mjs': '_javascript',
    'js.map': '_javascript_2',
    'min.js': '_javascript_2',

    // JSON
    'json': '_json',
    'jsonc': '_json',
    'json5': '_json',

    // Kotlin
    'kt': '_kotlin',
    'ktm': '_kotlin',
    'kts': '_kotlin',

    // Markdown
    'md': '_markdown',
    'mdx': '_markdown',

    // NGINX
    'nginxconf': '_nginx',
    'vhost': '_nginx',

    // Objective-C
    'm': '_objective_c',
    'mm': '_objective_c',

    // Package
    'gz': '_package',
    'tar': '_package',
    'zip': '_package',

    // PDF
    'pdf': '_pdf',

    // PHP
    'php': '_php',

    // Prisma
    'prisma': '_prisma',

    // Python
    'py': '_python',
    'gyp': '_python',

    // Ruby
    'erb': '_ruby',
    'html.erb': '_ruby',
    'rb': '_ruby',

    // SASS
    'less': '_sass',
    'sass': '_sass',
    'scss': '_sass',

    // Scala
    'sbt': '_scala',
    'sc': '_scala',
    'scala': '_scala',
    'scala.html': '_scala',

    // Shell
    'sh': '_shell',

    // Shopify
    'liquid': '_shopify',

    // Solidity
    'sol': '_solidity',

    // SQL
    'db': '_sql',
    'ddl': '_sql',
    'sql': '_sql',
    'mysql': '_sql',
    'nosql': '_sql',

    // Substrate
    'contract': '_substrate',

    // SVG
    'svg': '_svg',

    // Swift
    'swift': '_swift',

    // TypeScript
    'ts': '_typescript',
    'tsx': '_typescript',
    'd.ts': '_typescript_2',

    // VSCode
    'code-workspace': '_vscode',

    // Web Assembly
    's': '_web_assembly',
    'wasm': '_web_assembly',
    'wast': '_web_assembly',

    // YAML
    'yaml': '_yaml',
    'yml': '_yaml',
  },
  fileNames: {
    // Android
    'androidmanifest.xml': '_android',
    'gradlew': '_android',
    'gradlew.bat': '_android',

    // Apollo
    ...jsconfig('apollo', '_apollo'),

    // Babel
    ...jsconfig('babel', '_babel'),

    // Buildkite
    'buildkite.json': '_buildkite',
    'buildkite.yaml': '_buildkite',
    'buildkite.yml': '_buildkite',
    'pipeline.json': '_buildkite',
    'pipeline.yaml': '_buildkite',
    'pipeline.yml': '_buildkite',

    // CircleCI
    '.circleci/config.yml': '_circleci',
    '.circleci/config.yaml': '_circleci',

    // CocoaPods
    'podfile': '_cocoapods',
    'podfile.lock': '_cocoapods',

    // Codecov
    'codecov.yaml': '_codecov',
    'codecov.yml': '_codecov',

    // Deno
    'deno.json': '_deno',

    // DigitalOcean
    'do.yaml': '_digitalocean',
    'do.yml': '_digitalocean',

    // Docker
    '.dockerignore': '_docker',
    'dockerfile': '_docker',

    // ESLint
    '.eslintignore': '_eslint',
    ...jsconfig('eslint', '_eslint'),

    // Flutter
    '.metadata': '_flutter',
    'pubspec.lock': '_flutter',
    'pubspec.yaml': '_flutter',
    'pubspec.yml': '_flutter',

    // GitHub
    '.gitattributes': '_github',
    '.gitconfig': '_github',
    '.gitignore': '_github',
    '.gitkeep': '_github',
    '.gitmodules': '_github',
    'license': '_github',

    // Go
    'go.mod': '_go',
    'go.sum': '_go',

    // Google
    '.gcloudignore': '_google',
    'app.yaml': '_google',
    'app.yml': '_google',
    'manifest.json': '_google',
    'robots.txt': '_google',

    // GraphQL
    ...jsconfig('graphql', '_graphql'),

    // Jest
    ...jsconfig('jest', '_jest'),

    // Mocha
    ...jsconfig('mocha', '_mocha'),

    // Next.js
    'next-env.d.ts': '_nextjs',
    ...jsconfig('next', '_nextjs'),

    // NGINX
    'fastcgi.conf': '_nginx',
    'mime.types': '_nginx',
    'nginx.conf': '_nginx',
    'proxy.conf': '_nginx',

    // Node.js
    '.npmignore': '_nodejs',
    '.yarn-integrity': '_nodejs',
    'npm-shrinkwrap.json': '_nodejs',
    'package.json': '_nodejs',
    'package-lock.json': '_nodejs',
    'yarn.lock': '_nodejs',
    ...jsconfig('yarn', '_nodejs'),

    // Prettier
    ...jsconfig('prettier', '_prettier'),

    // React
    ...jsconfig('react-native', '_react'),

    // Ruby
    'gemfile': '_ruby',
    'gemfile.lock': '_ruby',

    // Swift
    'package.resolved': '_swift',

    // TSConfig
    'tsconfig.json': '_tsconfig',
    'tsconfig.app.json': '_tsconfig',
    'tsconfig.build.json': '_tsconfig',
    'tsconfig.dev.json': '_tsconfig',
    'tsconfig.prod.json': '_tsconfig',
    'tsconfig.test.json': '_tsconfig',

    // Vercel
    'now.json': '_vercel',
    'vercel.json': '_vercel',

    // VSCode
    '.editorconfig': '_vscode',
    '.vscode/settings.json': '_vscode',

    // Webpack
    ...jsconfig('webpack', '_webpack'),

    // ZSH
    'dna.json': '_zsh',
    'dna.yaml': '_zsh',
    'dna.yml': '_zsh',
  },
  light: {},
};
