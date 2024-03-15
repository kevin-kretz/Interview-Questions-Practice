/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carryNum = 0;
    let previousNode = new ListNode();
    let headNode = previousNode;

    while (l1.val || l2.val || carryNum) {
        let val1 = 0;
        let val2 = 0;

        if (l1) {
            val1 = l1.val;
            l1 = l1.next
        }
        if (l2) {
            val2 = l2.val;
            l2 = l2.next
        }

        let sum = val1 + val2 + carryNum;
        let digit = sum % 10;
        carryNum = Math.floor(sum / 10)

        const currentNode = new ListNode(digit)
        previousNode.next = currentNode;
        previousNode = currentNode;
    }

    return headNode.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

addTwoNumbers([2,4,3,5], [5,6,4]);