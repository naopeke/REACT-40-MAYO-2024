import { ReactNode } from "react";

// type HeadingProps = {
//     level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
//     title?: string;
//     className?: string;
//     children?: ReactNode;
// } & React.HTMLAttributes<HTMLHeadElement>;

interface HeadingProps2 extends  React.HTMLAttributes<HTMLHeadingElement> {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    title?: string;
    className?: string;
    children?: ReactNode;
  }
  
  function Heading(props: HeadingProps2) {

    const { children, level, title, className, ...restoDeProps } = props;
  
    const acceptedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    
    const Tag = level && acceptedTags.includes(level) ? level : 'h1';
  
    const headingClasses = {
      h1: 'text-3xl font-bold my-4',
      h2: 'text-2xl font-bold my-4',
      h3: 'text-xl font-bold my-3',
      h4: 'text-lg font-bold my-3',
      h5: 'text-md font-bold my-2',
      h6: 'text-base font-bold my-2',
    }
  
    return (
      <>
        <Tag className={`${headingClasses[Tag]} ${className}`} {...restoDeProps} >{children || title}</Tag>
      </>
    )
  }
  

export default Heading