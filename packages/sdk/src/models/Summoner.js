/**
 * Represents the Summoner object
 */
class Summoner {
  // --------------------------------------------------
  // Properties
  // --------------------------------------------------
  constructor(props) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get accountId() {
    return this.props.accountId;
  }
}

export default Summoner;
