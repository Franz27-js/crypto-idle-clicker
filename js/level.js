export default class Level {
  constructor(wallet) {
    this.level = 1;
    this.experience = 0;
    this.experience_to_next_level = 100;
    this.experience_multiplier = 1;
    this.experience_gain = 10;

    this.wallet = wallet;
    this.level_element = null;
    this.level_count = null;
    this.level_bar = null;

    this.createLevelElement();
  }

  getLevel() {
    return this.level;
  }

  getExperience() {
    return this.experience;
  }

  getExperienceToNextLevel() {
    return this.experience_to_next_level;
  }

  setExperienceMultiplier(multiplier) {
    this.experience_multiplier = multiplier;
  }

  setExperienceGain(new_gain) {
    this.experience_gain = new_gain;
  }

  addExperience() {
    this.experience += this.experience_gain * this.experience_multiplier;
    let level_check = this.checkLevelUp();
    this.updateLevelElement();

    return level_check;
  }

  checkLevelUp() {
    if (this.experience >= this.experience_to_next_level) {
      this.experience -= this.experience_to_next_level;
      this.level += 1;
      this.experience_to_next_level = Math.floor(this.experience_to_next_level * 1.75);
      return '__new_level_reached__';
    } else {
      return '';
    }
  }

  createLevelElement() {
    this.level_element = document.createElement('div');
    this.level_element.id = 'level';
    this.level_element.classList.add('level');

    this.level_count = document.createElement('div');
    this.level_count.classList.add('level_count');
    this.level_count.textContent = `Level: ${this.level}`;

    this.level_bar = document.createElement('div');
    this.level_bar.classList.add('level_bar');
    this.level_bar.appendChild(document.createElement('div'));
    this.level_bar.firstChild.style.width = '0%';

    this.level_element.appendChild(this.level_count);
    this.level_element.appendChild(this.level_bar);
    this.wallet.wallet_element.appendChild(this.level_element);
  }
  
  updateLevelElement() {
    this.level_count.textContent = `Level: ${this.level}`;
    let progress = (this.experience / this.experience_to_next_level) * 100;
    this.level_bar.firstChild.style.width = `${progress}%`;
  }
}