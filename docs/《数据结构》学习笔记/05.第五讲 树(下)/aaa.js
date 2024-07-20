class Node {
  constructor(char, freq) {
      this.char = char;
      this.freq = freq;
      this.left = null;
      this.right = null;
  }
}

class PriorityQueue {
  constructor() {
      this.queue = [];
  }

  enqueue(node) {
      this.queue.push(node);
      this.queue.sort((a, b) => a.freq - b.freq);
  }

  dequeue() {
      return this.queue.shift();
  }

  isEmpty() {
      return this.queue.length === 0;
  }
}

function buildHuffmanTree(frequencies) {
  const pq = new PriorityQueue();

  // 创建带有字符和频率的节点，并加入优先级队列
  frequencies.forEach(freq => {
      pq.enqueue(new Node(null, freq));
  });

  // 当优先级队列中有超过一个元素时，继续循环
  while (!pq.isEmpty() && pq.queue.length > 1) {
      // 取出两个最小频率的节点
      const left = pq.dequeue();
      const right = pq.dequeue();

      // 创建一个新的内部节点，其频率为两个子节点频率之和
      const merged = new Node(null, left.freq + right.freq);
      merged.left = left;
      merged.right = right;

      // 将新节点放回优先级队列
      pq.enqueue(merged);
  }

  // 最后剩下的节点即为哈夫曼树的根节点
  return pq.dequeue();
}

// 示例
const frequencies = [
  { char: 'a', freq: 45 },
  { char: 'b', freq: 13 },
  { char: 'c', freq: 12 },
  { char: 'd', freq: 16 },
  { char: 'e', freq: 9 },
  { char: 'f', freq: 5 }
];

const root = buildHuffmanTree(frequencies);
console.log(root);
