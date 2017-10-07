class PatternInteger {
  /**
   * Validate integer
   * @allow {<=999999}
   */
  static is(value) {
    let response = false;
    if (parseInt(value, 10) > 0) {
      response = /^[0-9]{1,6}$/.test(value);
    }
    return response;
  }
}

export default PatternInteger;
