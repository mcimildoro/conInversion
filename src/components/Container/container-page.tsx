//import CoverParticles from "../CoverParticles/cover-particles"

interface ContainerPageProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerPageProps) => {
    const { children } = props

    return (
        <div className="w-full max-w-7xl px-4  mx-auto  md:pb-0 md:px-4 bg-dark-cover">   
            {children}
        </div>
    );
}

export default ContainerPage;