import { ButtonHTMLAttributes } from "vue";

export interface ButtonProps {
  /** Button size */
  block?: boolean;
  /** Button type */
  type?: "primary" | "ghost" | "text";
  /** Button string */
  text?: string;
  /** Button default type */
  ButtonNativeType?: NonNullable<ButtonHTMLAttributes["type"]>;
}
