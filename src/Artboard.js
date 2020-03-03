import React, { Fragment } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";

import './Artboard.scss';

const Artboard = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(gql`
    {
      share(shortId: "Y8wDM") {
        shortId
        version {
          document {
            name
            artboards {
              entries {
                name
                isArtboard
                files {
                  url
                  height
                  width
                  scale
                  thumbnails {
                    url
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const artboard = data.share.version.document.artboards.entries[id];
  let sourceSet = "";
  artboard.files.forEach(file => {
    sourceSet += (file.url + ' ' + file.scale + 'x, ');
  });

  return (
    <Fragment className="artboard">
      <header className="artboard_header">
        {artboard.name}
      </header>
      <main className="artboard_container">
        <img 
          className="artboard_image"
          src={artboard.files[0].url}
          srcSet={sourceSet}
        />
      </main>
      
    </Fragment>
  );
};

  export default Artboard;