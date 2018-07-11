import {Component  } from "react";

class DrawerComponent extends Component{
    constructor(props)
    {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)

    }
    onNavigatorEvent = event=>{
       if(event.type === "NavBarButtonPress")
       {
          
           if(event.id === "sideDrawerToggle")
           {
            console.log(event.type);
            this.props.navigator.toggleDrawer({
                side: "left"
            });
           }
       }
    }
}
export default DrawerComponent;