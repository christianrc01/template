export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline-white";
  type?: "button" | "submit" | "reset";
}

export interface EndpointConfig {
  path: string;
  target: string;
}
