describe('cryptosquare', function() {
  it("is thisisfifteenbehaviortest when the input is this, is, fifteen behavior test!!!", function() {
    expect(convertString("this, is, fifteen behavior test!!!")).to.equal("thisisfifteenbehaviortest");
  });
  it("is thisi,sfift,eenbe,havio,rtest when input is thisisfifteenbehaviortest", function() {
    expect(squareStraightString("thisisfifteenbehaviortest")).to.equal("thisi,sfift,eenbe,havio,rtest");
  });
  it("is tsehr hfeat iinve sfbis iteot when input is thisi,sfift,eenbe,havio,rtest", function() {
    expect(cryptSquare("thisi,sfift,eenbe,havio,rtest")).to.equal("tsehr hfeat iinve sfbis iteot ");
  });
});
