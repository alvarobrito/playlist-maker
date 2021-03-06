import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Spinner from '@/components/ui/Spinner';

const withSpinner = (PageComponent) => {
  class Loader extends Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      const { loading } = this.props;
      // loading initial value false, create a state isLoading or check a option in router
      return (
        <div>
          {(!loading) && (<PageComponent {...this.props} />)}
          {(loading) && (<Spinner />)}
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    loading: state.sections.artist.loading,
  });

  return connect(mapStateToProps, {})(Loader);
};

export default withSpinner;
