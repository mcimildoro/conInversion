import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
//import InfoCard from '@/components/InfoCard/info';
import Home from '@/app/page';



it('renders a simple text', () => {
    render(<div>Hello, Jest!</div>);
    expect(screen.getByText('Hello, Jest!')).toBeInTheDocument();
});