describe('testing',function(){
	describe('add',function(){
		it("1+1 should be equal 2",function(){
			expect(testing.add(1,1)).toBe(2);
		});
	});

	describe('sub',function(){
		it("1-1 should be equal to 0",function(){
			expect(testing.sub(1,2)).toBe(-1);
		});
	});
});