export const snapshotToArray = snapshot => {
  const data = [];

  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });

  return data;
};

export const reverseArray = toReverseArray => {
  const reversedArray = [];

  for (var i = toReverseArray.length - 1; i >= 0; i--) {
    reversedArray.push(toReverseArray[i]);
  }

  return reversedArray;
};
