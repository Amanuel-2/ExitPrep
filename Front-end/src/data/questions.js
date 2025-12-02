export const questionsByTopic = {
  1: [ // Data Structures
    {
      id: 1,
      text: 'What is the time complexity of searching for an element in a balanced Binary Search Tree?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      correctAnswer: 1,
      explanation: 'In a balanced BST, the height is log n, and searching requires traversing from root to a leaf in the worst case, giving O(log n) time complexity.',
    },
    {
      id: 2,
      text: 'Which data structure uses LIFO (Last In First Out) principle?',
      options: ['Queue', 'Stack', 'Array', 'Linked List'],
      correctAnswer: 1,
      explanation: 'A Stack follows the LIFO principle where the last element added is the first one to be removed.',
    },
    {
      id: 3,
      text: 'What is the worst-case time complexity of inserting an element at the beginning of a singly linked list?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      correctAnswer: 0,
      explanation: 'Inserting at the beginning of a linked list only requires updating the head pointer, which is a constant time operation O(1).',
    },
  ],
  2: [ // Algorithms
    {
      id: 1,
      text: 'Which sorting algorithm has the best average-case time complexity?',
      options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
      correctAnswer: 2,
      explanation: 'Merge Sort has O(n log n) average-case time complexity, which is better than the O(n²) of Bubble, Insertion, and Selection Sort.',
    },
    {
      id: 2,
      text: 'What technique does Dynamic Programming use to optimize recursive solutions?',
      options: ['Divide and Conquer', 'Memoization', 'Backtracking', 'Greedy Approach'],
      correctAnswer: 1,
      explanation: 'Dynamic Programming uses memoization to store results of subproblems and avoid redundant calculations.',
    },
    {
      id: 3,
      text: 'Which algorithm is used to find the shortest path in a weighted graph?',
      options: ['BFS', 'DFS', 'Dijkstra\'s Algorithm', 'Binary Search'],
      correctAnswer: 2,
      explanation: 'Dijkstra\'s Algorithm is specifically designed to find the shortest path in weighted graphs with non-negative edge weights.',
    },
  ],
  3: [ // Operating Systems
    {
      id: 1,
      text: 'What is a deadlock in operating systems?',
      options: [
        'When a process terminates unexpectedly',
        'When two or more processes are waiting for each other to release resources',
        'When CPU utilization is 100%',
        'When memory is full',
      ],
      correctAnswer: 1,
      explanation: 'A deadlock occurs when processes are in a circular wait, each holding resources that others need.',
    },
    {
      id: 2,
      text: 'Which scheduling algorithm can cause starvation?',
      options: ['Round Robin', 'First Come First Serve', 'Priority Scheduling', 'Shortest Job First'],
      correctAnswer: 2,
      explanation: 'Priority Scheduling can cause starvation when high-priority processes continuously arrive, preventing low-priority processes from executing.',
    },
    {
      id: 3,
      text: 'What is the purpose of virtual memory?',
      options: [
        'To increase CPU speed',
        'To allow execution of processes larger than physical memory',
        'To improve disk performance',
        'To reduce power consumption',
      ],
      correctAnswer: 1,
      explanation: 'Virtual memory allows the system to use disk space as an extension of RAM, enabling execution of larger programs.',
    },
  ],
  4: [ // Database Systems
    {
      id: 1,
      text: 'What is the purpose of database normalization?',
      options: [
        'To increase query speed',
        'To reduce data redundancy and improve data integrity',
        'To encrypt data',
        'To backup data',
      ],
      correctAnswer: 1,
      explanation: 'Normalization organizes data to minimize redundancy and dependency, improving data integrity and reducing anomalies.',
    },
    {
      id: 2,
      text: 'Which SQL clause is used to filter grouped results?',
      options: ['WHERE', 'HAVING', 'GROUP BY', 'ORDER BY'],
      correctAnswer: 1,
      explanation: 'HAVING is used to filter results after grouping, while WHERE filters before grouping.',
    },
    {
      id: 3,
      text: 'What does ACID stand for in database transactions?',
      options: [
        'Atomicity, Consistency, Isolation, Durability',
        'Access, Control, Integrity, Data',
        'Authentication, Confidentiality, Integrity, Delivery',
        'Availability, Consistency, Isolation, Distribution',
      ],
      correctAnswer: 0,
      explanation: 'ACID properties ensure reliable database transactions: Atomicity, Consistency, Isolation, and Durability.',
    },
  ],
  5: [ // Computer Networks
    {
      id: 1,
      text: 'Which layer of the OSI model is responsible for routing?',
      options: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer'],
      correctAnswer: 2,
      explanation: 'The Network Layer (Layer 3) handles routing and forwarding of packets between networks.',
    },
    {
      id: 2,
      text: 'What is the default port number for HTTPS?',
      options: ['80', '443', '8080', '3000'],
      correctAnswer: 1,
      explanation: 'HTTPS uses port 443 by default, while HTTP uses port 80.',
    },
    {
      id: 3,
      text: 'Which protocol is used for sending emails?',
      options: ['HTTP', 'FTP', 'SMTP', 'DNS'],
      correctAnswer: 2,
      explanation: 'SMTP (Simple Mail Transfer Protocol) is used for sending emails between servers.',
    },
  ],
  6: [ // Software Engineering
    {
      id: 1,
      text: 'Which design pattern ensures a class has only one instance?',
      options: ['Factory Pattern', 'Singleton Pattern', 'Observer Pattern', 'Strategy Pattern'],
      correctAnswer: 1,
      explanation: 'The Singleton Pattern restricts instantiation of a class to a single instance and provides global access to it.',
    },
    {
      id: 2,
      text: 'What does TDD stand for?',
      options: ['Test Driven Development', 'Technical Design Document', 'Total Development Duration', 'Type Definition Declaration'],
      correctAnswer: 0,
      explanation: 'TDD (Test Driven Development) is a software development approach where tests are written before the actual code.',
    },
    {
      id: 3,
      text: 'Which Agile ceremony is used for sprint planning?',
      options: ['Daily Standup', 'Sprint Planning Meeting', 'Retrospective', 'Review'],
      correctAnswer: 1,
      explanation: 'Sprint Planning Meeting is where the team plans the work to be performed during the sprint.',
    },
  ],
};

// Generate mixed questions for exam mode
export function generateExamQuestions(count = 50) {
  const allQuestions = [];
  Object.keys(questionsByTopic).forEach((topicId) => {
    questionsByTopic[topicId].forEach((q, idx) => {
      allQuestions.push({
        ...q,
        id: `${topicId}-${idx + 1}`,
        topicId: parseInt(topicId),
      });
    });
  });

  // Shuffle and take first 'count' questions
  const shuffled = allQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
