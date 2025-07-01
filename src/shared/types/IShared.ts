export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline-white";
}

export interface EndpointConfig {
  path: string;
  target: string;
}
