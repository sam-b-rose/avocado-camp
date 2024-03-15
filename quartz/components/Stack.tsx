import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  space: string
}

export default ((opts?: Options) => {
  const Stack: QuartzComponent = ({ children }: QuartzComponentProps) => {
    const space = opts?.space ?? "1.5rem"
    return (
      <div className="stack" style={{ "--space": space }}>
        {children}
      </div>
    )
  }

  Stack.css = `
  .stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .stack > * {
    margin-block: 0;
  }

  .stack > * + * {
    margin-block-start: var(--space, 1.5rem);
  }
  `

  return Stack
}) satisfies QuartzComponentConstructor
