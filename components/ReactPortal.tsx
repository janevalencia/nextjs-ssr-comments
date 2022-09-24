import { ReactNode, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

// Default props value.
const defaultReactPortalProps = {
    wrapperId: "react-portal"
}

// Define ReactPortal props.
type ReactPortalProps = {
    children: ReactNode,
    wrapperId: string
} & typeof defaultReactPortalProps;

// Render component.
const ReactPortal = ({children, wrapperId} : ReactPortalProps) => {

    // Manage state of portal-wrapper.
    const [ wrapper, setWrapper ] = useState<Element | null>(null);
    useLayoutEffect(() => {
        // (Attempt) Fetch wrapper-element.
        let element = document.getElementById(wrapperId);
        
        // Flag to notify whether the wrapper is created and appended to body.
        let created = false;
        
        // If element not found, create portal-wrapper and append to body.
        if (!element) {
            created = true;
            const wrapper = document.createElement('div');
            wrapper.setAttribute("id", wrapperId);
            document.body.appendChild(wrapper);
            element = wrapper;
        }

        // Set wrapper state.
        setWrapper(element);

        // Cleanup effect to remove programatically the created wrapper element.
        return () => {
            if (created && element?.parentNode) {
              element.parentNode.removeChild(element);
            }
          }
    }, [wrapperId]);

    // Return null on initial rendering.
    if (wrapper === null) return null;

    // Return portal-wrapper component.
    return createPortal(children, wrapper);
}
ReactPortal.defaultProps = defaultReactPortalProps;

export default ReactPortal;