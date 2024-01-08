import { Design, DesignImage } from "../../styles/designs"
import DesignMeta from "./DesignMeta"

const SingleDesign = ({ design, matches }) => {
  return (
    //product container
    <Design>
        <DesignImage src={design.image} />
    <DesignMeta design={design} matches={matches} />
    </Design>
      //Image
      //Meta
      //Actions
      //Footer
  )
}

export default SingleDesign;