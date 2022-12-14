import Block from '../../utils/Block';
import template from './button.hbs';

interface ButtonProps {
  class?: string;
  type?: string;
  title: string;
  events?: {
    click: (...args: any) => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, {...this.props });
  }
}
