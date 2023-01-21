import Navigation from "./Navigation"

export default function Wrapper({ children, className } : { children : React.ReactNode, className? : string }) {
    return(
        <div className="relative">
                <Navigation />
                <div className={className}>{children}</div>
        </div>
    )
}