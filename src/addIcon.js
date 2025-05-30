
// Add icon
const addIcon = (types) => {
  const icons = [];
  // const types = text.split('|');
  for (const type of types) {
    if (['py', 'python'].includes(type.toLowerCase())) {
      icons.push('![Python](svg/python.svg?raw=true)');
    }
    if (['node', 'nodejs'].includes(type.toLowerCase())) {
      icons.push('![NodeJs](svg/nodejs.svg?raw=true)');
    }
    if (['ts', 'typescript'].includes(type.toLowerCase())) {
      icons.push('![TypeScript](svg/tsnode.svg?raw=true)');
    }
    if (['js', 'javascript'].includes(type.toLowerCase())) {
      icons.push('![JavaScript](svg/javascript.svg?raw=true)');
    }
    if (['jar', 'java'].includes(type.toLowerCase())) {
      icons.push('![Java](svg/openjdk.svg?raw=true)');
    }
    if (['springboot', 'spring-boot'].includes(type.toLowerCase())) {
      icons.push('![Java](svg/springboot.svg?raw=true)');
    }
    if (['c#', 'csharp'].includes(type.toLowerCase())) {
      icons.push('![C#](svg/csharp.svg?raw=true)');
    }
    if (['c'].includes(type.toLowerCase())) {
      icons.push('![C](svg/c.svg?raw=true)');
    }
    if (['c++', 'cplusplus'].includes(type.toLowerCase())) {
      icons.push('![C++](svg/cplusplus.svg?raw=true)');
    }
    if (['php'].includes(type.toLowerCase())) {
      icons.push('![PHP](svg/php.svg?raw=true)');
    }
    if (['rust'].includes(type.toLowerCase())) {
      icons.push('![Rust](svg/rust.svg?raw=true)');
    }
    if (['dart'].includes(type.toLowerCase())) {
      icons.push('![Dart](svg/dart.svg?raw=true)');
    }
    if (['sh', 'shell'].includes(type.toLowerCase())) {
      icons.push('![Shell](svg/shell.svg?raw=true)');
    }
    if (['kotlin'].includes(type.toLowerCase())) {
      icons.push('![Kotlin](svg/kotlin.svg?raw=true)');
    }
    if (['vue'].includes(type.toLowerCase())) {
      icons.push('![Vue](svg/vue.svg?raw=true)');
    }
    if (['svelte'].includes(type.toLowerCase())) {
      icons.push('![Svelte](svg/svelte.svg?raw=true)');
    }
    if (['swift'].includes(type.toLowerCase())) {
      icons.push('![Swift](svg/swift.svg?raw=true)');
    }
    if (['flutter'].includes(type.toLowerCase())) {
      icons.push('![Flutter](svg/flutter.svg?raw=true)');
    }
    if (['exe'].includes(type.toLowerCase())) {
      icons.push('![Windows](svg/windows.svg?raw=true)');
    }
    if (['cli'].includes(type.toLowerCase())) {
      icons.push('![Cli](svg/terminal.svg?raw=true)');
    }
    if (['docker'].includes(type.toLowerCase())) {
      icons.push('![Docker](svg/docker.svg?raw=true)');
    }
    if (['go', 'golang'].includes(type.toLowerCase())) {
      icons.push('![Go](svg/go.svg?raw=true)');
    }
    if (['web'].includes(type.toLowerCase())) {
      icons.push('![Web](svg/edge.svg?raw=true)');
    }
    if (['android'].includes(type.toLowerCase())) {
      icons.push('![Android](svg/android.svg?raw=true)');
    }
    if (['linux'].includes(type.toLowerCase())) {
      icons.push('![Linux](svg/linux.svg?raw=true)');
    }
    if (['apple', 'mac', 'ios'].includes(type.toLowerCase())) {
      icons.push('![MacOS](svg/apple.svg?raw=true)');
    }
  }
  return icons.join(' ');
}

module.exports = { addIcon };
