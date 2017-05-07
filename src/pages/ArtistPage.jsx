import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import { getArtist } from '@/modules/artist/actions';

// Custom
import Albums from '@/components/Albums';
import SongList from '@/components/SongList';
import Related from '@/components/Related';
import Spinner from '@/components/ui/Spinner';

class ArtistPage extends Component {

  componentWillMount() {
    this.props.getArtist(this.props.artistId);
  }

  render() {
    const { loading, artist, artistId } = this.props;
    return (
      <div>
        {(!loading) && (
          <Card>
            <CardMedia
              overlay={<CardTitle title={artist.name} />}
            >
              <img src={artist.images[0].url} alt={artist.name} />
            </CardMedia>
            <CardText>
              <Subheader>Albums</Subheader>
              <Albums albums={artist.albums} artistId={artistId} />
              <Subheader>Top tracks</Subheader>
              <SongList songs={artist.topTracks} />
              <Subheader>Related artists</Subheader>
              <Related artists={artist.related} />
            </CardText>
          </Card>
        )}
        {(loading) && (<Spinner />)}
      </div>
    );
  }

}

// PropTypes validation
ArtistPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  artist: PropTypes.object,
  artistId: PropTypes.string.isRequired,
  getArtist: PropTypes.func.isRequired,
};


// Redux connector
const mapStateToProps = ({ artist }, { match }) => ({
  artist: artist.data,
  loading: artist.loading,
  artistId: match.params.artistId,
});

const mapDispatchToProps = {
  getArtist,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
