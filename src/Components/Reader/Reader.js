import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Controls from '../Counter/Controls';
import Publications from '../Publication/Publications';
import PublicationJson from '../Publication/PublicationJson';
import Styles from '../Styles/styles.module.css';

class Reader extends Component {
  state = {
    currentArticle: 1,
    articleArr: PublicationJson,
  };

  hendleIncrement = () => {
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle + 1,
    }));
  };

  hendleDecrement = () => {
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle - 1,
    }));
  };

  render() {
    const { articleArr, currentArticle } = this.state;
    return (
      <div className={Styles.reader}>
        <Publications article={articleArr[currentArticle - 1]} />

        <Counter
          currentArticle={currentArticle}
          quantityArticle={articleArr.length}
        />

        <Controls
          onIncrement={this.hendleIncrement}
          onDecrement={this.hendleDecrement}
          disablePrev={currentArticle === 1 ? 'true' : 'false'}
          disableNext={currentArticle === articleArr.length ? 'true' : 'false'}
        />
      </div>
    );
  }
}

export default Reader;
