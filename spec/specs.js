describe('cryptosquare', function() {
  it("is thisisfifteenbehaviortest when the input is this, is, fifteen behavior test!!!", function() {
    expect(convertString("this, is, fifteen behavior test!!!")).to.equal("thisisfifteenbehaviortest");
  });
  it("is thisi sfift teenb ehavi ortes t when input is thisisfifteenbehaviortest", function() {
    expect(squareStraightString("thisisfifteenbehaviortest")).to.equal("thisi,sfift,eenbe,havio,rtest");
  });
});
