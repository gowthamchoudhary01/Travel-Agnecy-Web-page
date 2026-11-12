import test from 'node:test';
import assert from 'node:assert/strict';
import {
  slugifyCompanyName,
  formatCompanyName,
  formatPrice,
  generateAgencyStory,
  validateContactForm,
  generateWhatsAppLink,
  POPULAR_DESTINATIONS,
  HOLIDAY_PACKAGES,
} from './travelData';

test('slugifyCompanyName creates safe url slugs', () => {
  assert.equal(slugifyCompanyName('Royal Holidays'), 'royal-holidays');
  assert.equal(slugifyCompanyName('Azure & Silk Expeditions!'), 'azure-silk-expeditions');
  assert.equal(slugifyCompanyName('   '), 'travel-agency');
  assert.equal(slugifyCompanyName(''), 'travel-agency');
});

test('formatCompanyName handles custom and empty inputs', () => {
  assert.equal(formatCompanyName('Royal Holidays'), 'Royal Holidays');
  assert.equal(formatCompanyName('   '), 'Your Travel Company');
});

test('formatPrice formats numbers with currency symbols', () => {
  assert.equal(formatPrice(3850), '$3,850');
  assert.equal(formatPrice(12000, '€'), '€12,000');
});

test('generateAgencyStory dynamically embeds company name', () => {
  const story = generateAgencyStory('Royal Holidays');
  assert.ok(story.intro.includes('Royal Holidays'));
  assert.ok(story.mission.includes('Royal Holidays'));
  assert.ok(story.vision.includes('Royal Holidays'));
});

test('validateContactForm checks required fields strictly', () => {
  const invalid = validateContactForm({
    fullName: '',
    email: 'notanemail',
    phone: '12',
    destination: '',
    message: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.destination);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1 (555) 234-5678',
    destination: 'Maldives',
    message: 'Looking for a private anniversary trip in September.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generateWhatsAppLink builds valid wa.me URL with prefilled text', () => {
  const link = generateWhatsAppLink('+15550198234', 'Royal Holidays', 'Maldives', 'Maldives Luxury Escape');
  assert.ok(link.startsWith('https://wa.me/15550198234?text='));
  assert.ok(link.includes('Royal%20Holidays') || link.includes('Royal+Holidays') || link.includes('Royal'));
  assert.ok(link.includes('Maldives%20Luxury%20Escape'));
});

test('POPULAR_DESTINATIONS contains required 6 destinations', () => {
  const names = POPULAR_DESTINATIONS.map((d) => d.name);
  assert.deepEqual(names, ['Maldives', 'Switzerland', 'Dubai', 'Bali', 'Paris', 'Rajasthan']);
});

test('HOLIDAY_PACKAGES contains required 6 holiday packages', () => {
  const names = HOLIDAY_PACKAGES.map((p) => p.name);
  assert.deepEqual(names, [
    'Maldives Luxury Escape',
    'Swiss Alpine Adventure',
    'Dubai City Experience',
    'Bali Tropical Holiday',
    'Paris Romantic Getaway',
    'Rajasthan Heritage Tour',
  ]);
});
