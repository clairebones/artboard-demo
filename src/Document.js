import React, { Fragment } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Thumbnail from './Thumbnail';

import './Document.scss';
import sketchIcon from './assets/sketch-logo.svg';
import separatorIcon from './assets/separator.svg';

export default function Document() {
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

  return (
    <Fragment>
      <header className="document_header">
        <div className="sketchIconContainer" >
          <img className="sketchIcon" src={sketchIcon} alt="Sketch logo"/>
        </div>
        <img className="separatorIcon" src={separatorIcon} role="presentation"/>
        {data.share.version.document.name}
      </header>
      <main>
        <div className="thumbnails">
          {data.share.version.document.artboards.entries.map((artboard, index) => {
            return (
                <Thumbnail artboard={artboard} key={index} id={index}/>
            );
          })}
        </div>
      </main>
      
    </Fragment>
  );
  }