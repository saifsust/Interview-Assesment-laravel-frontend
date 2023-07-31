import { ThemeProvider } from "react-bootstrap";

export default function MainApp() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
    </ThemeProvider>
  );
}