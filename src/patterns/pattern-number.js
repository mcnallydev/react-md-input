class PatternNumber {
  /**
   * Validate numbers, allow zero in init
   * @allow {0>~}
   */
  static is(value) {
    return /^[0-9]+$/.test(value);
  }
}

export default PatternNumber;
