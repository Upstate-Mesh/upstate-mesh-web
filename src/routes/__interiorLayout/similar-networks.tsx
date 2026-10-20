import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

const PAGE_TITLE = "Similar Networks - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/similar-networks")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Mesh networks similar to Upstate Mesh in New York and around the world.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Typography component="h1" variant="h4">
        Similar networks
      </Typography>
      <Typography component="h5" variant="h5">
        Other New York mesh networks
      </Typography>
      <Typography>
        Here are some nearby networks in New York which we're working towards
        bridging Upstate Mesh with.
      </Typography>
      <ul>
        <li>
          <b>Hudson Valley: </b>
          <a
            href="https://hvmesh.net/"
            target="_blank"
            title="Hudson Valley Mesh"
          >
            Hudson Valley Mesh
          </a>
        </li>
        <li>
          <b>Sullivan County and the Southern Catskills Mountains: </b>
          <a href="https://kmesh.us/" target="_blank" title="Kaatskills Mesh">
            Kaatskills Mesh
          </a>
        </li>
        <li>
          <b>Southern Tier: </b>
          <a
            href="https://stmesh.net/"
            target="_blank"
            title="Southern Tier NY Meshtastic"
          >
            Southern Tier NY Meshtastic
          </a>
        </li>
        <li>
          <b>New York City: </b>
          <a href="https://nyme.sh/" target="_blank" title="nyme.sh">
            nyme.sh
          </a>
        </li>
      </ul>
      <Typography component="h5" variant="h5">
        Mesh networks outside of New York
      </Typography>
      <Typography>
        Mesh networking is growing worldwide, here are some networks outside of
        New York to check out.
      </Typography>
      <ul>
        <li>
          <b>Western MA: </b>
          <a href="https://brkme.sh/" target="_blank" title="Berkshire Mesh">
            Berkshire Mesh
          </a>
        </li>
        <li>
          <b>Connecticut: </b>
          <a href="https://ctmesh.org/" target="_blank" title="CTMesh">
            CTMesh
          </a>
        </li>
        <li>
          <b>Boston MA: </b>
          <a
            href="https://bostonme.sh/"
            target="_blank"
            title="Greater Boston Mesh"
          >
            Greater Boston Mesh
          </a>
        </li>
        <li>
          <b>New Hampshire: </b>
          <a href="https://nhmesh.com/" target="_blank" title="NHMesh">
            NHMesh
          </a>
        </li>
        <li>
          <b>North New Jersey: </b>
          <a
            href="https://forest-edge.info/"
            target="_blank"
            title="Forest Edge Mesh"
          >
            Forest Edge Mesh
          </a>
        </li>
        <li>
          <b>Philadelphia, Pennsylvania: </b>
          <a href="https://phillymesh.net/" target="_blank">
            Philly Mesh
          </a>
        </li>
        <li>
          <b>Western Pennsylvania: </b>
          <a href="https://wpamesh.net/" target="_blank" title="WPAMesh">
            WPAMesh
          </a>
        </li>
        <li>
          <b>Nashville, Tennessee: </b>
          <a href="https://www.instagram.com/meshville.tn" target="_blank">
            Meshville
          </a>
        </li>
        <li>
          <b>North Carolina: </b>
          <a href="https://ncmesh.net/" target="_blank">
            NC Mesh
          </a>
        </li>
        <li>
          <b>Birmingham, Alabama: </b>
          <a href="http://birminghammesh.org/" target="_blank">
            Birmingham Mesh
          </a>
        </li>
        <li>
          <b>Chicago, Illinois: </b>
          <a href="https://chicagolandmesh.org/" target="_blank">
            Chicagoland Mesh
          </a>
        </li>
        <li>
          <b>Wisconsin: </b>
          <a href="https://meshconsin.org/" target="_blank">
            Meshconsin
          </a>
        </li>
        <li>
          <b>Colorado: </b>
          <a href="https://coloradomesh.org/" target="_blank">
            Colorado Mesh
          </a>
        </li>
        <li>
          <b>Northwest Arkansas: </b>
          <a href="https://nwame.sh/" target="_blank">
            Northwest Arkansas Mesh
          </a>
        </li>
        <li>
          <b>Okmesh: </b>
          <a href="https://okmesh.org/" target="_blank">
            Okmesh
          </a>
        </li>
        <li>
          <b>Northern Texas: </b>
          <a href="https://ntxmesh.com" target="_blank">
            North Texas Mesh
          </a>
        </li>
        <li>
          <b>Austin, Texas: </b>
          <a href="https://www.austinmesh.org/" target="_blank">
            Austin Mesh
          </a>
        </li>
        <li>
          <b>Calgary, Alberta: </b>
          <a href="https://yycmesh.com" target="_blank">
            YYC Mesh
          </a>
        </li>
        <li>
          <b>San Francisco / Bay Area, California: </b>
          <a href="https://bayme.sh" target="_blank">
            bayme.sh
          </a>
        </li>
        <li>
          <b>Southern California: </b>
          <a href="https://socalmesh.org/" target="_blank">
            SoCal Mesh
          </a>
        </li>
        <li>
          <b>Hawaii: </b>
          <a href="https://www.hawaiimesh.net/" target="_blank">
            Hawaii Mesh
          </a>
        </li>
      </ul>
    </>
  );
}
