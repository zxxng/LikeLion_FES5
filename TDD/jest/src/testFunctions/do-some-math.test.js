import { sum, subdtract, multiply, divide } from '../myFunctions/do-some-math'

describe('Math functions test', () => {
	it('두 가지 값을 더합니다.', () => {
		expect(sum(1, 1)).toBe(2)
		expect(sum()).toBe(0)
		expect(sum(0,0)).toBe(0)
	})
	it('첫번째 값에서 두번쨰 값을 뻅니다.', () => {
		expect(subdtract(1, 1)).toBe(0)
		expect(subdtract()).toBe(0)
		expect(subdtract(0,0)).toBe(0)
	})
	it('두 가지 값을 곱합니다.', () => {
		expect(multiply(1, 1)).toBe(1)
		expect(multiply()).toBe(0)
		expect(multiply(0,0)).toBe(0)
	})
	it('두 가지 값을 나눕니다.', () => {
		expect(divide(2, 1)).toBe(2)
		expect(()=>divide()).toThrowError('0으로 나눌 수 없습니다.');
		// expect(divide(0,0)).toBe(0/0)
	})
})