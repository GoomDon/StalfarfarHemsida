var down = false

dropDown = document.getElementsByClassName("TextDropdown")[0]; 
visaMer = document.getElementsByClassName("VisaMer")[0]; 
visaMindre = document.getElementsByClassName("VisaMindre")[0]; 

function ToggleDropdown()
{

    if(down)
    {
        dropDown.style.visibility = "hidden"
 
        visaMer.style.visibility = "visible"
        visaMindre.style.visibility = "hidden"
    }
    else
    {
        dropDown.style.visibility = "visible"

        visaMer.style.visibility = "hidden"
        visaMindre.style.visibility = "visible"
    }

    down = !down

}