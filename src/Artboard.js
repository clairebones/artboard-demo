import React, { Fragment } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import './Artboard.scss';
import closeIcon from './assets/close.svg';
import breadcrumbIcon from './assets/breadcrumb.svg';
import arrowLeftIcon from './assets/arrow-left.svg';
import arrowRightIcon from './assets/arrow-right.svg';

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
    <Fragment>
      <header className="artboard_header">
        <div className="artboard_header--nav">
          <div className="closeButton">
            <Link to={`/`}><img className="closeIcon" src={closeIcon}/></Link>
          </div>
          <div className="nav">
            {(id > 0) &&
              <Link to={`/`+(parseInt(id)-1)}>
                <img className="navIcon" src={arrowLeftIcon}/>
              </Link>
            }
              <div className="breadcrumbs">
                {parseInt(id)+1}
                <img className="navIcon" src={breadcrumbIcon}/>
                {data.share.version.document.artboards.entries.length}
              </div>
              {(id < (data.share.version.document.artboards.entries.length-1)) &&
                <Link to={`/`+(parseInt(id)+1)}>
                  <img className="navIcon" src={arrowRightIcon}/>
                </Link>
              }
            </div>
          </div>
        <div className="artboard_header--name">
          <span>{artboard.name}</span>
        </div>
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