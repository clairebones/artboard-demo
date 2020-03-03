import React, { Fragment } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Thumbnail from './Thumbnail';

import './Document.scss';

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

  console.log('data', data);

  return (
    <Fragment>
      <header>
        {data.share.version.document.name}
      </header>
      <main>
        <ul className="thumbnails">
          {data.share.version.document.artboards.entries.map((artboard, index) => {
            return (
                <Thumbnail artboard={artboard} key={index} id={index}/>
            );
          })}
        </ul>
      </main>
      
    </Fragment>
  );
  }