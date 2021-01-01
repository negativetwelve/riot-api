/**
 * Represents the Match object
 */
class Match {
  // --------------------------------------------------
  // Properties
  // --------------------------------------------------
  constructor(props) {
    this.props = props;
  }

  get gameId() {
    return this.props.gameId;
  }
}

export default Match;
