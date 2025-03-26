export function ChevronLeft() {
    return "ChevronLeft";
}
export function ChevronRight() {
    return "ChevronRight";
}

module.exports = {
    Home: (props) => <svg {...props} data-testid="icon-home" />,
    User: (props) => <svg {...props} data-testid="icon-user" />,
    BookText: (props) => <svg {...props} data-testid="icon-booktext" />,
    CodeSquare: (props) => <svg {...props} data-testid="icon-codesquare" />,
    MessageCircle: (props) => <svg {...props} data-testid="icon-messagecircle" />,
  };
  