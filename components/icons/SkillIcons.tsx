import {
  Code2,
  FileCode,
  Braces,
  Atom,
  Server,
  FileType,
  Layers,
  LayoutGrid,
  Paintbrush,
  Github,
  Package,
  Puzzle,
  PanelLeft,
  Boxes,
} from "lucide-react"

export const Html5Icon = ({ className }: { className?: string }) => <FileCode className={className} />

export const Css3Icon = ({ className }: { className?: string }) => <Paintbrush className={className} />

export const JavascriptIcon = ({ className }: { className?: string }) => <Braces className={className} />

export const ReactIcon = ({ className }: { className?: string }) => <Atom className={className} />

export const NextjsIcon = ({ className }: { className?: string }) => <Server className={className} />

export const TypescriptIcon = ({ className }: { className?: string }) => <FileType className={className} />

export const TailwindIcon = ({ className }: { className?: string }) => <Layers className={className} />

export const BootstrapIcon = ({ className }: { className?: string }) => <LayoutGrid className={className} />

export const SassIcon = ({ className }: { className?: string }) => <Code2 className={className} />

export const GithubIcon = ({ className }: { className?: string }) => <Github className={className} />

export const NpmIcon = ({ className }: { className?: string }) => <Package className={className} />

export const JqueryIcon = ({ className }: { className?: string }) => <Puzzle className={className} />

export const MuiIcon = ({ className }: { className?: string }) => <PanelLeft className={className} />

export const FlowbiteIcon = ({ className }: { className?: string }) => <Boxes className={className} />
