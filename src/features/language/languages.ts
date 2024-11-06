export type Language = {
  name:string, //Displayed in UI
  id:string //language id in hljs
}

function lang(name:string, id:string):Language{
  return {name, id}
}

const languages: Language[] = [
  lang('Auto','auto'),
  lang('Rust', 'rust'),
  lang('JSX', 'jsx'),
  lang('Javascript', 'javascript'),
  lang('Typescript', 'typescript'),
  lang('Python', 'python')
]

export default languages

