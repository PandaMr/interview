import reverse from '../../code/string/reverse';
import count from '../../code/string/count';

test('输入: "Let\'s take LeetCode contest"', () => {
    expect(reverse("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
});
