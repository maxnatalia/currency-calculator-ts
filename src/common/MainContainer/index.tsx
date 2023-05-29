import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main>
      <section>{children}</section>
    </main>
  );
};

export default MainContainer;
