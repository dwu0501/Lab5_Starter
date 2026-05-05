// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber tests
test('valid number - california number', () => {
  expect(isPhoneNumber("929 990-8838")).toBe(true);
});

test('valid number - number all dashes', () => {
  expect(isPhoneNumber("929-788-0909")).toBe(true);
});

test('invalid number - no dash', () => {
  expect(isPhoneNumber("65380933")).toBe(false);
});

test('invalid number - letter added', () => {
  expect(isPhoneNumber("708-229-099o")).toBe(false);
});

// isEmail tests
test('valid email - extra domains', () => {
  expect(isEmail("cse110@ucsd.edu")).toBe(true);
});

test('valid email - capitalized combined letters', () => {
  expect(isEmail("SWEisAwesome@UCSD.io")).toBe(true);
});

test('invalid email - longer subdomains', () => {
  expect(isEmail("cse110@ucsd.educateSWE")).toBe(false);
});

test('invalid email - extra domains and characters', () => {
  expect(isEmail("cse110@gmail.ucsd.edu.cse#")).toBe(false);
});

// isStrongPassword tests
test('valid strong password - normal password', () => {
  expect(isStrongPassword("ThisIsStrong_01")).toBe(true);
});

test('valid strong password - normal password', () => {
  expect(isStrongPassword("sp26")).toBe(true);
});

 test('invalid strong password - password over length', () => {
  expect(isStrongPassword("ThisIsStrong_010")).toBe(false);
});

 test('invalid strong password - password unpermitted chars', () => {
  expect(isStrongPassword("ThisIsStrong_#")).toBe(false);
});


// isDate tests
test('valid date - normal date', () => {
  expect(isDate("01/01/2000")).toBe(true);
});

test('valid date - compact date', () => {
  expect(isDate("1/1/2006")).toBe(true);
});

 test('invalid date - too long', () => {
  expect(isDate("01/01/20001")).toBe(false);
});

 test('invalid date - invalid day and month', () => {
  expect(isDate("321//2026")).toBe(false);
});

// isHexColor tests
test('valid HEX colour - normal with interchange capitalized', () => {
  expect(isHexColor("aDfFEe")).toBe(true);
});
test('valid HEX colour - compact black', () => {
  expect(isHexColor("000")).toBe(true);
});
test('invalid HEX colour - over range', () => {
  expect(isHexColor("GGG")).toBe(false);
});
test('invalid HEX colour - over length', () => {
  expect(isHexColor("aDfFEe0")).toBe(false);
});