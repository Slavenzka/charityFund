import { DisplayTypes } from 'specs/enum.spec'

interface VisibilityAnimationProviderOptions {
  /*
  * Flag to keep element in dom after hiding animation or not
  */
  keepInDOMAfterRender?: boolean;
  /*
  * Value of display property applied to target element
  */
  displayType?: DisplayTypes;
}

interface RenderFunctionArguments {
  style: {
    display: DisplayTypes;
  };
  animationClassName: string;
  getTargetRef: (node: HTMLElement) => void;
}

export interface VisibilityAnimationProviderProps {
  /*
  * Class name that contains animation or transition to hide the target element
  */
  classNameHidden: string;
  /*
  * Class name that contains animation or transition to reveal the target element
  */
  classNameVisible: string;
  /*
  * Flag that controls target item visibility
  */
  isVisible?: boolean;
  /*
  * Fine-tuning of component operation
  */
  options: VisibilityAnimationProviderOptions;
  /**
  * Render function for the children component
  */
  children: (argsObject: RenderFunctionArguments) => JSX.Element;
}