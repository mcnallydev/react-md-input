class PatternDecimal {
  /**
   * Validate decimal
   * @allow {[99999, 99999.00]}
   */
  static is(value) {
    let response = false;
    if (parseInt(value, 10) <= 99999) {
      response = /^\d{1,5}\.?\d{0,2}$/.test(value);
    }
    return response;
  }
}

export default PatternDecimal;
