
// Returns the Title bar with the logo and the webapp name
export default function  TitleBar(){
    return(
        <div className="titlebar">
            <div className="titlebar__logo">
                <img src="../logo.gif" alt="logo" height={130}/>
            </div>
            <h1>IUBH News Page Project </h1>
        </div>
    )
}