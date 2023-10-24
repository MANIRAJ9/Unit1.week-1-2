from pymongo import MongoClient

# Connect to the MongoDB server
client = MongoClient('mongodb://localhost:27017/')

# Access the database
db = client['sports_team_db']

# Create the collection for players
players_collection = db['players']

# Insert sample player data
players = [
    {
        'name': 'Player 1',
        'rushing_yards': 500,
        'touchdowns_thrown': 10,
        'sacks': 5,
        'field_goals_made': 20,
        'field_goals_missed': 3,
        'catches_made': 40
    },
    {
        'name': 'Player 2',
        'rushing_yards': 350,
        'touchdowns_thrown': 15,
        'sacks': 8,
        'field_goals_made': 15,
        'field_goals_missed': 2,
        'catches_made': 30
    },
    # Add more player data as needed
]

players_collection.insert_many(players)

# Query for the player with the most touchdown passes
most_touchdowns_player = players_collection.find_one(sort=[('touchdowns_thrown', -1)])
print(f"The player with the most touchdown passes: {most_touchdowns_player['name']}")

# Query for the player with the most rushing yards
most_rushing_yards_player = players_collection.find_one(sort=[('rushing_yards', -1)])
print(f"The player with the most rushing yards: {most_rushing_yards_player['name']}")

# Query for the player with the least rushing yards
least_rushing_yards_player = players_collection.find_one(sort=[('rushing_yards', 1)])
print(f"The player with the least rushing yards: {least_rushing_yards_player['name']}")

# Query for a list of players sorted from most to fewest field goals made
sorted_field_goals_players = players_collection.find().sort('field_goals_made', -1)
print("Players sorted by field goals made:")
for player in sorted_field_goals_players:
    print(player['name'], player['field_goals_made'])

# Query for the player with the most number of sacks
most_sacks_player = players_collection.find_one(sort=[('sacks', -1)])
print(f"The player with the most sacks: {most_sacks_player['name']}")
