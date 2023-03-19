import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Load the diabetes dataset
df = pd.read_csv('diabetes.csv')

# Split the dataset into features and target
X = df.drop('Outcome', axis=1)
y = df['Outcome']

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a logistic regression model on the training data
clf = LogisticRegression(random_state=42).fit(X_train, y_train)

# Test the accuracy of the model on the testing data
accuracy = clf.score(X_test, y_test)
print(f'Accuracy: {accuracy:.2f}')

# Make predictions on new data
new_data = pd.DataFrame({'Pregnancies': [2], 'Glucose': [120], 'BloodPressure': [70], 'SkinThickness': [20], 'Insulin': [150], 'BMI': [25], 'DiabetesPedigreeFunction': [0.25], 'Age': [30]})
prediction = clf.predict_proba(new_data)[:,1]
print(f'Predicted probability of having diabetes: {prediction[0]*100:.2f}%')
